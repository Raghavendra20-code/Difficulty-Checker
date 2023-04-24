import {render,screen,cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'
import MenuListItem from "./MenuListItem";
afterEach(()=>{
    cleanup();
})

describe("Testing MenuListItem",()=>{
    const onItemClick = jest.fn();
    test("Menu List Item Render",()=>{
        render(<MenuListItem isSelected={true}
                             onClick={onItemClick}
                             difficulty= "Low"/>)
        const MenuListItem1 = screen.getByTestId('MenuListItem');
        expect(MenuListItem1).toBeInTheDocument();
    })

    test("Menu List Item Low",()=>{
        render(<MenuListItem isSelected={true}
                             onClick={onItemClick}
                             difficulty= "Low"/>)
        const MenuListItem1 = screen.getByTestId('MenuListItem');
        expect(MenuListItem1).toHaveTextContent('Set to: Low')
    })

    test("Menu List Item Medium",()=>{
        render(<MenuListItem isSelected={true}
                             onClick={onItemClick}
                             difficulty= "Medium"/>)
        const MenuListItem1 = screen.getByTestId('MenuListItem');
        expect(MenuListItem1).toHaveTextContent('Set to: Medium')
    })

    test("Menu List Item High",()=>{
        render(<MenuListItem isSelected={true}
                             onClick={onItemClick}
                             difficulty= "High"/>)
        const MenuListItem1 = screen.getByTestId('MenuListItem');
        expect(MenuListItem1).toHaveTextContent('Set to: High')
    })

    test("Menu List Item Insane",()=>{
        render(<MenuListItem isSelected={true}
                             onClick={onItemClick}
                             difficulty= "Insane"/>)
        const MenuListItem1 = screen.getByTestId('MenuListItem');
        expect(MenuListItem1).toHaveTextContent('Set to: Insane')
    })

});