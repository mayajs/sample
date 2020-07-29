import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

class DatabaseService {
  final String url = 'http://10.0.2.2:3333/todos';
  final Map<String, String> headers = {'Content-type': 'application/json'};

  getAll(String url, {Map<String, String> headers}) async {
    return await http.get(url, headers: headers);
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

  delete(String url, String id, {Map<String, String> headers}) async {
    return await http.delete(url + id, headers: headers);
  }
}
