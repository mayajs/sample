import 'package:flutter/foundation.dart';

class TodoModel {
  final String id;
  final String title;
  final bool completed;

  TodoModel({
    this.id,
    @required this.title,
    @required this.completed,
  });

  factory TodoModel.fromJson(Map<String, dynamic> json) {
    return TodoModel(
      id: json['_id'] as String,
      title: json['title'] as String,
      completed: json['completed'] as bool,
    );
  }

  Map<String, dynamic> toJson() => { 'title': title, 'completed': completed };
}
