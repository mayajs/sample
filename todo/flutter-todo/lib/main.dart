import 'package:flutter/material.dart';
import 'package:flutter_todo/todo.service.dart';
import 'package:flutter_todo/todo.model.dart';
import 'package:fluttertoast/fluttertoast.dart';

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

  void _patchCompleted({String id, String title, bool completed}) {
    setState(() {
      todoService
          .patch(TodoModel(id: id, title: title, completed: completed))
          .then((String message) {
        _toastBuilder(message);
      });
    });
  }

  void _deleteTodo(todo) {
    setState(() {
      todoService.delete(todo).then((String message) {
        _toastBuilder(message);
      });
    });
  }

  void _postTodo() {
    setState(() {
      todoService
          .post(TodoModel(title: todoController.text, completed: false))
          .then((String message) {
        _toastBuilder(message);
      });
      todoController.clear();
    });
  }

  void _patchTitle(String id) {
    setState(() {
      todoService
          .patch(
              TodoModel(id: id, title: todoController.text, completed: false))
          .then((String message) {
        _toastBuilder(message);
      });
      todoController.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: _futureBuilder(),
      floatingActionButton: _floatingActionButton(),
    );
  }

  Widget _futureBuilder() {
    return FutureBuilder(
      future: todoService.getAll(),
      builder: (BuildContext context, AsyncSnapshot<List<TodoModel>> snapshot) {
        if (snapshot.hasData) {
          return _todoBuilder(snapshot.data);
        }

        return Center(child: CircularProgressIndicator());
      },
    );
  }

  Widget _floatingActionButton() {
    return FloatingActionButton(
      onPressed: () {
        _showTodoDialog(null);
      },
      tooltip: 'Add TODO',
      child: Icon(Icons.add),
    );
  }

  Widget _todoBuilder(List<TodoModel> todos) {
    return ListView.builder(
      padding: EdgeInsets.all(10),
      itemCount: todos.length,
      itemBuilder: (BuildContext context, int index) {
        return _todoContent(todos[index]);
      },
    );
  }

  Widget _todoContent(TodoModel todo) {
    return Container(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(children: _checkboxAndLabel(todo)),
          Row(children: _actionButtons(todo)),
        ],
      ),
    );
  }

  List<Widget> _checkboxAndLabel(TodoModel todo) {
    return <Widget>[
      Checkbox(
        value: todo.completed,
        onChanged: (value) {
          value = todo.completed;
          _patchCompleted(id: todo.id, title: todo.title, completed: !value);
        },
      ),
      Text(
        todo.title,
        style: TextStyle(
          fontSize: 20,
          height: 1,
        ),
      ),
    ];
  }

  List<Widget> _actionButtons(TodoModel todo) {
    return <Widget>[
      _buttonBuilder(
        icon: Icons.edit,
        color: Colors.green,
        onTap: () {
          _showTodoDialog(todo);
        },
      ),
      _buttonBuilder(
        icon: Icons.delete,
        color: Colors.red,
        onTap: () {
          _deleteTodo(todo);
        },
      )
    ];
  }

  Widget _buttonBuilder({IconData icon, Color color, void Function() onTap}) {
    return GestureDetector(
      child: Icon(
        icon,
        color: color,
      ),
      onTap: onTap,
    );
  }

  Future<void> _showTodoDialog(TodoModel todo) async {
    String title = todo != null ? 'Edit TODO' : 'Add TODO';
    String id = todo != null ? todo.id : null;
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(title),
          content: _dialogContent(),
          actions: <Widget>[
            _cancelButton(),
            _submitButtonBuilder(id),
          ],
        );
      },
    );
  }

  Widget _dialogContent() {
    return SingleChildScrollView(
      child: TextField(
        controller: todoController,
        decoration: InputDecoration(
          border: InputBorder.none,
          hintText: 'Enter TODO',
        ),
      ),
    );
  }

  Widget _cancelButton() {
    return FlatButton(
      child: Text('Cancel'),
      onPressed: () {
        Navigator.of(context).pop();
      },
    );
  }

  Widget _submitButtonBuilder(String id) {
    return FlatButton(
      child: Text('Submit'),
      onPressed: () {
        id != null ? _patchTitle(id) : _postTodo();
        Navigator.of(context).pop();
      },
    );
  }

  Future<bool> _toastBuilder(String message) {
    return Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 1,
      backgroundColor: Colors.grey,
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }
}
