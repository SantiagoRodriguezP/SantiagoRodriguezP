import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import '../index.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = ({ expe }) =>{
    const [filteredYear, setfilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
        console.log(selectedYear);
    }
    
    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    expe.map((exp, id) => {
                        return (
                            <ExpenseItem
                                key={id}
                                title={exp.title}
                                amount={exp.amount}
                                date={exp.date}
                            />
                        )
                    })
                }

            </Card>
        </div>
    )
}

export default Expenses;