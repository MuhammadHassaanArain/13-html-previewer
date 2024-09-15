"use client";

import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { predefinedHtml } from "./predefinedHtml";

function HtmlPreviewerComponent() {
    
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {setHtmlCode(event.target.value)};
  const handlePreview = () => {
    setPreviewHtml(htmlCode)
  };
  const handlePasteHtml = () => {
    setHtmlCode(predefinedHtml)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-foreground">
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-card">
        <h1 className="text-2xl font-bold mb-4 text-center text-stone-800">HTML Previewer</h1>
        <p className="text-muted-foreground mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-input bg-background text-foreground text-gray-900"
            rows={8}
          />
          <div className="flex justify-center">
            <div className="flex gap-2">
              <Button onClick={handlePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML</Button>
             
            </div>
           
          </div>
          <h1 className="text-gray-700 flex justify-center">Made by Hassaan Arain</h1>
          <div className="p-4 rounded-lg border border-input bg-background text-foreground">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} className="text-gray-900"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HtmlPreviewerComponent;
