import EmployersListItem from "../employers-list-item/employers-list-item"

import "./employers-list.css";

const EmployersList = ({data}) => {
// свойство компонентов. перебор объекта чере мап возвращает массив с данными

    const elements = data.map(item => {
        return (
            <EmployersListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;


