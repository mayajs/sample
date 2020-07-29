import 'package:flutter/material.dart';
import 'package:flutter_todo/todo.service.dart';
import 'package:flutter_todo/todo.model.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter TODO App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter TODO App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TodoService todoService = TodoService();
  final todoController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: FutureBuilder(
        future: todoService.getAll(),
        builder:
            (BuildContext context, AsyncSnapshot<List<TodoModel>> snapshot) {
          if (snapshot.hasData) {
            return _todoBuilder(todos: snapshot.data);
          }

          return Center(child: CircularProgressIndicator());
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => {
          todoController.clear(),
          _showAddTodoDialog(),
        },
        tooltip: 'Add TODO',
        child: Icon(Icons.add),
      ),
    );
  }

  Widget _todoBuilder({List<TodoModel> todos}) {
    return ListView.builder(
      padding: const EdgeInsets.all(8),
      itemCount: todos.length,
      itemBuilder: (BuildContext context, int index) {
        return Container(
          height: 50,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Text(todos[index].title),
              Row(
                children: <Widget>[
                  GestureDetector(
                    child: Icon(
                      Icons.edit,
                      color: Colors.green,
                    ),
                    onTap: () => {
                      todoController.clear(),
                      _showEditTodoDialog(todos[index])},
                  ),
                  GestureDetector(
                    child: Icon(
                      Icons.delete,
                      color: Colors.red,
                    ),
                    onTap: () => {
                      setState(() {
                        todoService
                            .delete(todos[index])
                            .then((String message) => print(message));
                      }),
                    },
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  Future<void> _showAddTodoDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Add TODO'),
          content: SingleChildScrollView(
            child: TextField(
              controller: todoController,
              decoration: InputDecoration(
                  border: InputBorder.none, hintText: 'Enter TODO'),
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Cancel'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            FlatButton(
              child: Text('Submit'),
              onPressed: () => {
                setState(() {
                  todoService
                      .post(TodoModel(
                          title: todoController.text, completed: false))
                      .then((String message) => print(message));
                }),
                Navigator.of(context).pop(),
              },
            ),
          ],
        );
      },
    );
  }

  Future<void> _showEditTodoDialog(TodoModel todo) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Edit ${todo.title}'),
          content: SingleChildScrollView(
            child: TextField(
              controller: todoController,
              decoration: InputDecoration(
                border: InputBorder.none,
                hintText: 'Enter TODO',
              ),
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Cancel'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            FlatButton(
              child: Text('Submit'),
              onPressed: () => {
                setState(() {
                  todoService
                      .patch(TodoModel(id: todo.id, title: todoController.text, completed: false))
                      .then((String message) => print(message));
                }),
                Navigator.of(context).pop(),
              },
            ),
          ],
        );
      },
    );
  }
}
