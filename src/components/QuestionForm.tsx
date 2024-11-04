import React from 'react';
import { Question } from '../types';

type QuestionFormProps = {
  question: Question;
  value: string;
  onChange: (value: string) => void;
};

export default function QuestionForm({ question, value, onChange }: QuestionFormProps) {
  return (
    <div className="mb-6">
      <label className="block text-[#676767] text-sm font-medium mb-2">
        {question.text}
        {question.required && <span className="text-[#A0268A] ml-1">*</span>}
      </label>
      
      {question.type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={question.required}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#A1CC3A] focus:border-transparent"
          rows={4}
        />
      ) : (
        <input
          type={question.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={question.required}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#A1CC3A] focus:border-transparent"
        />
      )}
    </div>
  );
}