import 'package:flutter/material.dart';

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
  final List<String> todos = <String>[];
  final todoController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: <Widget>[
          Expanded(child: _todoBuilder()),
        ],
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

  Widget _todoBuilder() {
    return ListView.builder(
      padding: const EdgeInsets.all(8),
      itemCount: todos.length,
      itemBuilder: (BuildContext context, int index) {
        return Container(
          height: 50,
          child: Text(todos[index]),
        );
      },
    );
  }

  Future<void> _showAddTodoDialog() async {
  return showDialog<void>(
    context: context,
    barrierDismissible: false, // user must tap button!
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text('Add TODO'),
        content: SingleChildScrollView(
          child: TextField(
            controller: todoController,
            decoration: InputDecoration(
              border: InputBorder.none,
              hintText: 'Enter TODO'
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
                todos.insert(0, todoController.text);
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
