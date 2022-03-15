import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAssets, theme } from "./src/components";
import { OnBoardingNavigator } from "./src/navigation/OnboardingNavigator";
import { QuestionNavigator } from "./src/navigation/QuestionNavigator";
// import { welcomeAssets } from "./src/components/OnBoarding/Welcome";

// const assets: number[] = [welcomeAssets];
// const assets = [...welcomeAssets];

const fonts = {
  "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
};

export type AppStackRoutes = {
  OnBoarding: undefined;
  Question: undefined;
};

const MainStack = createNativeStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <MainStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <MainStack.Screen
              name="OnBoarding"
              component={OnBoardingNavigator}
            /> */}
            <MainStack.Screen name="Question" component={QuestionNavigator} />
          </MainStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Memento mori blouses</Text>
//     </View>
//   );
// }

// // import React, { useState, useEffect, useRef } from "react";
// // import { View, Text } from "react-native";

// // import type { QuestionState } from "./src-quiz1/Util";
// // import { getQuizQuestions, Difficulty } from "./src-quiz1/Util";
// // import Question from "./src-quiz1/components/Question";
// // import Answer from "./src-quiz1/components/Answer";
// // import Next from "./src-quiz1/components/buttons/Next";
// // import Play from "./src-quiz1/components/buttons/Play";

// // export interface AnswerObject {
// //   question: string;
// //   answer: string;
// //   correct: boolean;
// //   correctAnswer: string;
// // }

// // function App() {
// //   const [loading, setLoading] = useState(false);
// //   const [questions, setQuestions] = useState<QuestionState[]>([]);
// //   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
// //   const [score, setScore] = useState(0);
// //   const [gameOver, setGameOver] = useState(true);
// //   const [number, setNumber] = useState(0);
// //   const [TOTAL_QUESTIONS] = useState(10);
// //   const setAnswer = useRef(null);

// //   const startQuiz = async () => {
// //     setLoading(true);
// //     setGameOver(false);

// //     const newQuestions = await getQuizQuestions(
// //       TOTAL_QUESTIONS,
// //       Difficulty.EASY
// //     );
// //     // console.log(newQuestions);
// //     // alert("Working!");
// //     setQuestions(newQuestions);
// //     setScore(0);
// //     setUserAnswers([]);
// //     setNumber(0);
// //     setLoading(false);
// //   };

// //   const checkAnswer = () => {
// //     alert("alert");
// //     // if (!gameOver) {
// //     //   const answer = setAnswer.current;
// //     //   console.log(answer);

// //     //   const correct = questions[number]?.correct_answer === answer;
// //     //   console.log(correct);

// //     //   if (correct) {
// //     //     setScore((prev) => prev + 1);
// //     //   }

// //     //   const answerObject = {
// //     //     question: questions[number]?.question,
// //     //     answer,
// //     //     correct,
// //     //     correctAnswer: questions[number]?.correct_answer,
// //     // };

// //     //   setUserAnswers((prev: any) => [...prev, answerObject]);
// //     //   setTimeout(() => {
// //     //     nextQuestion();
// //     //   }, 800);
// //     // }
// //   };

// //   const nextQuestion = () => {
// //     const nextQ = number + 1;

// //     if (nextQ === TOTAL_QUESTIONS) {
// //       setGameOver(true);
// //     } else {
// //       setNumber(nextQ);
// //     }
// //   };

// //   useEffect(() => {
// //     startQuiz();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         justifyContent: "flex-end",
// //         padding: 20,
// //         backgroundColor: "white",
// //       }}
// //     >
// //       <View style={{ flex: 1 }}>
// //         <View
// //           style={{
// //             flexDirection: "row",
// //             justifyContent: "space-between",
// //             marginTop: 70,
// //           }}
// //         >
// //           <Text style={{ fontSize: 16 }}>Questions</Text>
// //           <Text style={{ fontSize: 16, color: "#006996" }}>
// //             {number + 1} / {questions.length}
// //           </Text>
// //         </View>
// //         <View style={{ marginVertical: 20 }}>
// //           <Text style={{ fontSize: 16, color: "#006996" }}>Score: {score}</Text>
// //         </View>
// //         {questions.length > 0 ? (
// //           <>
// //             <Question
// //               number={number + 1}
// //               question={questions[number]?.question}
// //             />
// //             <Answer
// //               answers={questions[number]?.answers}
// //               {...{ setAnswer, checkAnswer }}
// //               userAnswer={userAnswers ? userAnswers[number] : undefined}
// //             />
// //           </>
// //         ) : null}
// //       </View>

// //       <View
// //         style={{
// //           height: 60,
// //           width: 60,
// //           padding: 20,
// //           backgroundColor: "#006996",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           borderRadius: 300,
// //           position: "absolute",
// //           bottom: 20,
// //           right: 20,
// //         }}
// //       >
// //         {/* <Play onPress={() => startQuiz()} /> */}
// //         {/* play icon with active={true} wrapped with touchable
// //         onPress={() => startQuiz()} */}
// //         {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 ? (
// //           <Next onPress={() => nextQuestion()} active={true} />
// //         ) : (
// //           <Play onPress={() => startQuiz()} active={true} />
// //         )}
// //       </View>
// //     </View>
// //   );
// // }

// // export default App;

// // import * as React from "react";
// // import { StatusBar } from "expo-status-bar";
// // import { SafeAreaProvider } from "react-native-safe-area-context";
// // import { ThemeProvider } from "@shopify/restyle";

// // // import useCachedResources from "./hooks/useCachedResources";
// // import useColorScheme from "./hooks/useColorScheme";
// // import Navigation from "./navigation";
// // import { LoadAssets, theme } from "./src/components";
// // import {
// //   assets as authenticationAssets,
// //   AuthenticationNavigator,
// // } from "./src/Authentication";

// // const assets = [...authenticationAssets];

// // const fonts = {
// //   "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
// //   "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
// //   "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
// // };

// // export default function App() {
// //   // const isLoadingComplete = useCachedResources();
// //   const colorScheme = useColorScheme();

// //   // if (!isLoadingComplete) {
// //   //   return null;
// //   // } else {
// //   return (
// //     <ThemeProvider {...{ theme }}>
// //       <LoadAssets {...{ fonts, assets }}>
// //         <SafeAreaProvider>
// //           <Navigation colorScheme={colorScheme} />
// //           <StatusBar />
// //         </SafeAreaProvider>
// //       </LoadAssets>
// //     </ThemeProvider>
// //   );
// // }
