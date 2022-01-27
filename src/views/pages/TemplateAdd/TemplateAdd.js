import React, { useReducer, useState } from "react";
import Button from "../../../components/Button/Button";
import TemplateForm from "./components/TemplateForm/TemplateForm";
import TemplatePreview from "./components/TemplatePreview/TemplatePreview";

const initialTemplate = {
  name: null,
  rows: [],
  globalStyles: null,
};

const UPDATE = "UPDATE";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
};

const TemplateAdd = () => {
  const [template, dispatchTemplate] = useReducer(reducer, initialTemplate);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="m-2 w-full h-full">
      <div className="w-full">
        <div className="flex float-right pr-4">
          <Button onClick={() => setShowPreview(!showPreview)}>{`${
            showPreview ? "Close Preview" : "Preview Json"
          }`}</Button>
        </div>
      </div>
      <div className="m-2 flex w-full h-full">
        <TemplateForm template={template} dispatchTemplate={dispatchTemplate} />
        {showPreview && <TemplatePreview template={template} />}
      </div>
    </div>
  );
};

export default TemplateAdd;
