'use client';

import { useState, useEffect, useRef } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Type, Check, X } from 'lucide-react';

interface EditableTextProps {
  content: string;
  onSave?: (newContent: string) => void;
  className?: string;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export default function EditableText({ 
  content: initialContent, 
  onSave, 
  className = '', 
  tagName: Tag = 'div' 
}: EditableTextProps) {
  const { isEditMode } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(content);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setContent(initialContent);
  };

  if (!isEditMode) {
    return <Tag className={className}>{content}</Tag>;
  }

  if (isEditing) {
    return (
      <div className="relative group/edit inline-block w-full">
        <textarea
          ref={inputRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${className} w-full bg-white text-black p-2 rounded-md border-2 border-primary focus:outline-none min-h-[1em] resize-none`}
          rows={1}
        />
        <div className="absolute -top-10 right-0 flex gap-1 bg-foreground p-1 rounded-lg shadow-xl z-50">
          <button onClick={handleSave} className="p-1 hover:bg-green-500 rounded text-white transition-colors">
            <Check className="h-4 w-4" />
          </button>
          <button onClick={handleCancel} className="p-1 hover:bg-red-500 rounded text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => setIsEditing(true)}
      className={`${className} relative group/hover cursor-pointer border-2 border-dashed border-transparent hover:border-primary/50 hover:bg-primary/5 transition-all p-1 rounded-lg`}
    >
      {content}
      <div className="absolute -top-3 -right-3 opacity-0 group-hover/hover:opacity-100 transition-opacity bg-primary text-white p-1.5 rounded-full shadow-lg">
        <Type className="h-3 w-3" />
      </div>
    </div>
  );
}
