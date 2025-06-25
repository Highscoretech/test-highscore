"use client";
import { useState } from "react";
import { Button, Card, Typography, Box, Container, Paper, Stepper, Step, StepLabel, Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, Alert } from "@mui/material";
import { testQuestions } from "./constants/questions";

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(testQuestions.length).fill(""));
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  
  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[activeQuestion] = event.target.value;
    setAnswers(newAnswers);
    setError("");
  };

  const handleNext = () => {
    if (!answers[activeQuestion]) {
      setError("Please select an answer before proceeding");
      return;
    }
    
    if (activeQuestion < testQuestions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      setError("");
    }
  };

  const handlePrev = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
      setError("");
    }
  };

  const handleQuestionSelect = (index) => {
    setActiveQuestion(index);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    if (answers.some(answer => answer === "")) {
      setError("Please answer all questions before submitting");
      return;
    }
    
    // Calculate score
    let correctCount = 0;
    testQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Container maxWidth="md" className="py-8">
        <Card className="p-8 text-center">
          <Typography variant="h4" className="mb-4">Test Completed!</Typography>
          <Typography variant="h5" className="mb-6">
            Your Score: {score} out of {testQuestions.length}
          </Typography>
          <Typography variant="body1" className="mb-4">
            Percentage: {Math.round((score / testQuestions.length) * 100)}%
          </Typography>
          {/* <Button 
            variant="contained" 
            onClick={() => {
              setActiveQuestion(0);
              setAnswers(Array(testQuestions.length).fill(""));
              setSubmitted(false);
              setScore(null);
            }}
          >
            Take Test Again
          </Button> */}
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" component="h1" className="text-center mb-8 font-bold">
        HTML, CSS, and JavaScript Test
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Box className="flex flex-col md:flex-row gap-6">
          {/* Question numbers sidebar */}
          <Paper elevation={3} className="p-4 w-full md:w-1/4">
            <Typography variant="h6" className="mb-4 font-semibold">
              Questions
            </Typography>
            <div className="flex flex-col gap-2">
              {testQuestions.map((q, index) => (
                <Button 
                  key={q.id}
                  variant={activeQuestion === index ? "contained" : "outlined"}
                  onClick={() => handleQuestionSelect(index)}
                  className="justify-start"
                  color={answers[index] ? "primary" : "inherit"}
                >
                  {index + 1}. {answers[index] ? "Answered" : "Unanswered"}
                </Button>
              ))}
            </div>
            
            <Button 
              variant="contained" 
              color="success"
              type="submit"
              fullWidth
              className="mt-6"
            >
              Submit Test
            </Button>
          </Paper>
          
          {/* Main content area */}
          <Card className="p-6 flex-1">
            <Box className="mb-6">
              <Stepper activeStep={activeQuestion} alternativeLabel>
                {testQuestions.map((q, index) => (
                  <Step key={q.id} completed={Boolean(answers[index])}>
                    <StepLabel>Q{q.id}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            
            <Typography variant="h5" className="mb-4 font-semibold">
              Question {activeQuestion + 1} of {testQuestions.length}:
            </Typography>
            
            <Typography variant="h6" className="mb-6">
              {testQuestions[activeQuestion].question}
            </Typography>
            
            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}
            <FormControl component="fieldset" className="w-full mb-8">
              <Typography variant="subtitle1" className="mb-2 font-semibold">
                Options:
              </Typography>
              <RadioGroup
                name={`question-${activeQuestion}`}
                value={answers[activeQuestion]}
                onChange={handleAnswerChange}
              >
                {testQuestions[activeQuestion].options.map((option, index) => (
                  <Paper key={index} className="p-3 mb-2 hover:bg-gray-50">
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={`${String.fromCharCode(65 + index)}. ${option}`}
                      className="w-full"
                    />
                  </Paper>
                ))}
              </RadioGroup>
              {error && (
                <FormHelperText error>{error}</FormHelperText>
              )}
            </FormControl>
            
            <Box className="flex justify-between mt-6">
              <Button 
                variant="outlined" 
                onClick={handlePrev}
                disabled={activeQuestion === 0}
              >
                Previous
              </Button>
              <Typography variant="body2" className="self-center">
                {answers.filter(a => a).length} of {testQuestions.length} questions answered
              </Typography>
              {activeQuestion < testQuestions.length - 1 ? (
                <Button 
                  variant="contained" 
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                <Button 
                  variant="contained" 
                  color="success"
                  type="submit"
                >
                  Submit Test
                </Button>
              )}
            </Box>
          </Card>
        </Box>
      </form>
    </Container>
  );
}
