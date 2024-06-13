import { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from "naive-ui";

export const gamePassOptions = [
    {
        label: 'Assine o game pass | nivel 1',
        key: '1',
        children: [
            {
                label: 'Assine o game pass | nivel 2',
                key: '6',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    },
    
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]