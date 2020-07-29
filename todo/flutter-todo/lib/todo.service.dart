import 'dart:convert' as convert;
import 'package:flutter_todo/todo.model.dart';
import 'package:http/http.dart' as http;

class TodoService {
  final String url = 'http://10.0.2.2:3333/todos';
  final Map<String, String> headers = {'Content-type': 'application/json'};

  Future<List<TodoModel>> getAll() async {
    http.Response res = await http.get(url, headers: headers);

    if (res.statusCode == 200) {
      List<dynamic> body = convert.jsonDecode(res.body);
      List<TodoModel> todos =
          body.map((dynamic item) => TodoModel.fromJson(item)).toList();
      return todos;
    } else {
      throw "TODOS not found!";
    }
  }

  getById(String url, String id, {Map<String, String> headers}) async {
    return await http.get(url + id, headers: headers);
  }

  post(String url, String id,
      {Map<String, String> headers, Map<String, dynamic> data}) async {
    return await http.post(url,
        headers: headers, body: convert.jsonEncode(data));
  }

  patch(String url, String id,
      {Map<String, String> headers, Map<String, dynamic> data}) async {
    return await http.patch(url + id,
        headers: headers, body: convert.jsonEncode(data));
  }

  Future<String> delete(TodoModel todo) async {
    http.Response res = await http.delete('$url/${todo.id}', headers: headers);

    if (res.statusCode == 200) {
      return "${todo.title} is successfully deleted.";
    } else {
      return "Can't delete TODOS!";
    }
  }
}
