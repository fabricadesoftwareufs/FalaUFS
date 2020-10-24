import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const tagOptions = [
    {
        key: 'new',
        text: 'Mais novos',
        value: 'new',
        label: { color: 'blue', empty: true, circular: true },
    },
    {
        key: 'old',
        text: 'Mais antigos',
        value: 'old',
        label: { color: 'blue', empty: true, circular: true },
    },
    {
        key: 'Mais curtidos',
        text: 'Mais curtidos',
        value: 'Mais curtidos',
        label: { color: 'green', empty: true, circular: true },
    },
    {
        key: 'Menos curtidos',
        text: 'Menos curtidos',
        value: 'Menos curtidos',
        label: { color: 'red', empty: true, circular: true },
    },
]

const DropdownExampleSearchInMenu = () => (
    <Dropdown
        text='Filtrar comentários'
        icon='filter'
        floating
        labeled
        button
        className='icon'
        style={{ color: 'white', backgroundColor: "#004694"}}
    >
        <Dropdown.Menu>
            <Dropdown.Menu scrolling>
                {tagOptions.map((option) => (
                    <Dropdown.Item key={option.value} {...option} />
                ))}
            </Dropdown.Menu>
        </Dropdown.Menu>
    </Dropdown>
)

export default DropdownExampleSearchInMenu