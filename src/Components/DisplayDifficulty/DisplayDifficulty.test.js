import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import DisplayDifficulty from "./DisplayDifficulty";

afterEach(()=>{
    cleanup();
})

describe("Display Testing",()=>{

    test("Display Render",()=>{
        render(<DisplayDifficulty difficulty = "Low"/>);
        const display = screen.getByTestId("Display")
        expect(display).toBeInTheDocument();
    })

    test("Display Low",()=>{
        render(<DisplayDifficulty difficulty = "Low"/>);
        const display = screen.getByTestId("Display")
        expect(display).toHaveTextContent("Difficulty set to Low")
    })

    test("Display Medium",()=>{
        render(<DisplayDifficulty difficulty = "Medium"/>);
        const display = screen.getByTestId("Display")
        expect(display).toHaveTextContent("Difficulty set to Medium")
    })

    test("Display High",()=>{
        render(<DisplayDifficulty difficulty = "High"/>);
        const display = screen.getByTestId("Display")
        expect(display).toHaveTextContent("Difficulty set to High")
    })

    test("Display Insane",()=>{
        render(<DisplayDifficulty difficulty = "Insane"/>);
        const display = screen.getByTestId("Display")
        expect(display).toHaveTextContent("Difficulty set to Insane")
    })
})