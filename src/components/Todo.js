import { useState } from 'react';

const Todo = function () {
    const [todo, setTodo] = useState({ title: '', description: '' });
    // const [warning, setWarning] = useState(null);

    // const handleInput = (e) => {
    //     const inputValue = e.target.value;
    //     const updatedWarning = inputValue.includes('.js')?
    //         'You need JavaScript skill to complete the task. Do you have it?'
    //         : null;

    //     // this.setState({
    //     //     to do: inputValue,
    //     //     warning,
    //     // });
    //     setTodo(inputValue);
    //     setWarning(updatedWarning);
    // };

    const { title, description } = todo;

    return (
        <div>
            <p>{title}</p>

            <input
                type="text"
                value={title}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
            />
            <hr />
            <textarea
                name="todo"
                value={description}
                onChange={(e) =>
                    setTodo({
                        ...todo,

                        description: e.target.value,
                    })
                }
            />
        </div>
    );
};
export default Todo;
// always ager state ta jate thake jodi amra obj/array pass kori initially , taile destruct korbo first thn jeta change kora dorkar seta change korboo tahole render howar somoi full obj ba array ta jokhn jabe tokhn ager value gulaow pabo , r noile ekta ekta kore jodi update kori tahole baki element gula bu default set kora value dekhabe
