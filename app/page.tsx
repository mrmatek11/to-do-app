'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
import { Divider } from "@heroui/divider";
import { Tooltip } from "@heroui/tooltip";
import { Tabs, Tab } from "@heroui/tabs";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: 'personal' | 'work' | 'shopping';
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Todo['category']>('personal');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: generateId(),
      text: inputValue,
      completed: false,
      category: selectedCategory
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => todo.category === selectedCategory);

  // Prevent hydration errors by rendering nothing on the server
  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <Card>
        <CardHeader className="pb-0">
          <h1 className="text-2xl font-bold text-primary">Todo App</h1>
        </CardHeader>
        <CardBody>
          {/* Category Tabs */}
          <Tabs 
            selectedKey={selectedCategory}
            onSelectionChange={(key) => setSelectedCategory(key as Todo['category'])}
            color="primary"
            variant="underlined"
            className="mb-4"
          >
            <Tab key="personal" title="Personal" />
            <Tab key="work" title="Work" />
            <Tab key="shopping" title="Shopping" />
          </Tabs>

          {/* Add Todo Input */}
          <div className="flex mb-4">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter a new ${selectedCategory} task`}
              className="mr-2"
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            />
            <Tooltip content="Add Todo">
              <Button 
                color="primary" 
                variant="shadow" 
                isIconOnly 
                onClick={addTodo}
              >
                +
              </Button>
            </Tooltip>
          </div>

          <Divider />

          {/* Todo List */}
          {filteredTodos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Snippet 
                hideCopyButton 
                variant="bordered" 
                className="mt-4"
              >
                No {selectedCategory} todos yet. Start by adding a task!
              </Snippet>
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {filteredTodos.map(todo => (
                  <motion.div 
                    key={todo.id} 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Checkbox
                      isSelected={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className={todo.completed ? 'line-through text-gray-500' : ''}
                    >
                      {todo.text}
                    </Checkbox>
                    <Tooltip content="Delete Todo">
                      <Button 
                        variant="light" 
                        color="danger" 
                        isIconOnly
                        onClick={() => deleteTodo(todo.id)}
                      >
                        ✕
                      </Button>
                    </Tooltip>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div 
            className="mt-4 text-sm text-default-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Total Tasks: {todos.length} | 
            Completed: {todos.filter(todo => todo.completed).length} | 
            Pending: {todos.filter(todo => !todo.completed).length}
          </motion.div>
        </CardBody>
      </Card>
    </div>
  );
}