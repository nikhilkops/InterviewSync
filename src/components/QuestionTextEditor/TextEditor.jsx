import React, { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BiReflectVertical } from "react-icons/bi";  
import Logo from '../../images/Logo.svg'
import WhiteLogo from '../../images/LightLogo.svg'
import "./TextEditor.css";
import { EditorThemeColor } from "../constants/theme";
import * as api from '../../Axios'
import Question from "../Question/Question";
const RichTextEditor = () => {
  const [question, setQuestion] = useState("");
  const [questionDescription, setQuestionDescription] = useState([""]);
  const [difficulty, setDifficulty] = useState("Easy");
  const [examples, setExamples] = useState([
    { input: "", output: "", explanation: "",image:"" },
  ]);
  const [tag,setTag] = useState('');
  const [constraints, setConstraints] = useState([]);
  const [questionData, setQuestionData] = useState();
  const handleExampleChange = (index, field, value) => {
    const newExamples = [...examples];
    newExamples[index][field] = value;
    setExamples(newExamples); 
  };

  const handleDeleteExample = (index) => {
    const newExamples = [...examples];
    newExamples.splice(index, 1);
    setExamples(newExamples);
  };

  const handleDeleteConstraint = (index) => {
    const newConstraints = [...constraints];
    newConstraints.splice(index, 1);
    setConstraints(newConstraints);
  };

  const handleDeleteQuestionDescription = (index) => {
    const newQuestionDescription = [...questionDescription];
    newQuestionDescription.splice(index, 1);
    setQuestionDescription(newQuestionDescription);
  };

  const handleChange = async () => {
    const data = {
      problemImage:"",// to be changed
      title:question,
      difficulty,
      tag,
      examples,
      constraints:constraints,
      description:questionDescription,
      customTestCases:[{input:"",output:""}]// To be changed
    };

    api.saveProblem(data);
    // Perform the logic to save 'data' to your backend or wherever you need to store it
    console.log("Changed Data:", data);
    setQuestionData(data);
  };

  useEffect(() => {
    const data = {
      problemImage:"",// to be changed
      title:question,
      difficulty,
      examples,
      constraints:constraints,
      description:questionDescription,
      customTestCases:[{input:"",output:""}]// To be changed
    };
    setQuestionData(data);
  }, [question, difficulty, examples, constraints, questionDescription]);
  return (
    <> 
      <div className="adminEditor">
        <section
          className="question-section"
          style={{ backgroundColor: "rgb(1, 17, 31)",width:'70%' }}
        >
          <div className="heading-container">
            <div className="heating-content question-container">
              <label className="question-heading">Question:</label>
              <textarea
                className="question-input"
                style={{ color: "black", fontFamily: "Rubik, sans-serif" }}
                value={question}
                onChange={(e) => {
                  const newQuestion = e.target.value ;
                  setQuestion(newQuestion);
                }}
              />
            </div>
          </div>

          <div className="tags difficulty-row">
            <label>Difficulty:</label>
            <select
              className="question-input difficulty-select"
              value={difficulty}
              onChange={(e) => {
                setDifficulty(e.target.value);
              }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <label>Tags:</label>
            <input className="question-input" style={{ color: "black", fontFamily: "Rubik, sans-serif" }}type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
          </div>

          <div className="question-description">
            <div className="question-description">
              <div className="question-desc-content">
                <label>Question Description:</label>
                {questionDescription?.map((desc, index) => (
                  <div key={index}>
                    <div className="row padding-1rem">
                      <label>{`Paragraph ${index + 1}`}</label>
                      <div
                        className="add-btn delete"
                        onClick={() => handleDeleteQuestionDescription(index)}
                      >
                        <MdDelete className="add-btn-icon delete " />
                        <span>Delete</span>
                      </div>
                    </div>
                    <textarea
                      className="question-input"
                      value={desc}
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setQuestionDescription((prev) => [
                          ...prev.slice(0, index),
                          e.target.value,
                          ...prev.slice(index + 1),
                        ]);
                      }}
                    />
                   
                  </div>
                ))}
                <div
                  className="add-btn"
                  onClick={() =>
                    setQuestionDescription([...questionDescription, ""])
                  }
                >
                  <MdAddCircleOutline className="add-btn-icon" />
                  <span>Add Description</span>
                </div>
              </div>
            </div>
          </div>

          <div className="question-examples">
            <div className="question-example  ">
              {examples?.map((example, index) => (
                <div key={index} className="question-example">
                  <div className="row padding-1rem">
                    <p className="example">Example {index + 1}:</p>
                    <div
                      className="add-btn delete"
                      onClick={() => handleDeleteExample(index)}
                    >
                      <MdDelete className="add-btn-icon delete " />
                      <span>Delete</span>
                    </div>
                  </div>
                  <label>Input:</label>
                  <textarea
                    className="question-input"
                    value={example.input}
                    style={{ color: "black", fontFamily: "Rubik, sans-serif" }}
                    onChange={(e) => {
                      handleExampleChange(index, "input", e.target.value);
                    }}
                  />

                  <label>Output:</label>
                  <textarea
                    className="question-input"
                    value={example.output}
                    style={{ color: "black", fontFamily: "Rubik, sans-serif" }}
                    onChange={(e) => {
                      handleExampleChange(index, "output", e.target.value);
                    }}
                  />

                    <label>Image:</label>
                  <input
                    className="question-input"
                    type='file'
                    value={example.image}
                    style={{ color: "white", fontFamily: "Rubik, sans-serif" }}
                    onChange={(e) => {
                      handleExampleChange(index, "image", e.target.value);
                    }}
                  />


                  <label>Explanation:</label>
                  <textarea
                    className="question-input"
                    value={example.explanation}
                    style={{ color: "black", fontFamily: "Rubik, sans-serif" }}
                    onChange={(e) => {
                      handleExampleChange(index, "explanation", e.target.value);
                    }}
                  />
                </div>
              ))}
              <div
                className="add-btn"
                onClick={() =>
                  setExamples([
                    ...examples,
                    { input: "", output: "", explanation: "" },
                  ])
                }
              >
                <MdAddCircleOutline className="add-btn-icon" />
                <span>Add Example</span>
              </div>
            </div>
          </div>

          <div className="question-constraints question-container">
            <span className="constraint-heading">Constraints:</span>
            {constraints?.map((constraint, index) => (
              <div key={index}>
                <div className="row padding-1rem">
                  <input
                    className="question-input"
                    value={constraint}
                    style={{ color: "black", fontFamily: "Rubik, sans-serif" }}
                    onChange={(e) => {
                      setConstraints((prev) => [
                        ...prev.slice(0, index),
                        e.target.value,
                        ...prev.slice(index + 1),
                      ]);
                    }}
                  />
                  <div
                    className="add-btn delete"
                    onClick={() => handleDeleteConstraint(index)}
                  >
                    <MdDelete className="add-btn-icon delete " />
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="add-btn"
              onClick={() => setConstraints([...constraints, ""])}
            >
              <MdAddCircleOutline className="add-btn-icon" />
              <span>Add Constraint</span>
            </div>
          </div>

          <div className="add-btn btn-save end" onClick={handleChange}>
            <div className="btn-content">
              <IoIosSave className="add-btn-save" />
              <span>Save</span>
            </div>
          </div>
        </section>
        <Question questionData={questionData}></Question>
      </div>
    </>
  );
};

export default RichTextEditor;
