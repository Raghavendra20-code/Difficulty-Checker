import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import MenuList from "./MenuList";

afterEach(()=>{
    cleanup();
})

describe("MenuList testing", function () {

    test("Menu List Render",()=>{
        const onMenuListItemClick = jest.fn();
        render(<MenuList onItemClick = {onMenuListItemClick} difficulty = ""/>)
        const MenuListItem1 = screen.getAllByTestId("MenuListItem")[0];
        expect(MenuListItem1).toBeInTheDocument();
    })

});