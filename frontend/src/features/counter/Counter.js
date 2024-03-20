import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInf } from "./selectors";
import { register } from "./counterAPI";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectInf);
  const dispatch = useDispatch();

  const newUser = {
    nickname: "volodya",
    email: "volodya18@mail.com",
    password: "AI12cr!@",
  };

  const createUser = (newUserInf) => {
    const res = dispatch(register(newUserInf));
    console.log(res);
  };
  createUser(newUser);
  console.log(count);
  return <></>;
}
