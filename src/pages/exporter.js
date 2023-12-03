import Layout from "../Layout";
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';

// pages
import Dashboard from "./Dashboard";
import Smester from "./Smester";
import Login from "./Login";
import List from "./List";
// components
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Modal from "../components/Modal";

export {
    List,
    Login,
    Modal,
    Layout,
    Router,
    Routes,
    Route,
    useState,
    useEffect,
    Dashboard,
    Link,
    Sidebar,
    RightBar,
    Smester,
    Chart,
}