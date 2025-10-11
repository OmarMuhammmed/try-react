interface ICondition {
    name: string;
    isPacked: boolean;
}

function Condition({ name, isPacked }: ICondition) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>;
    }
    return <li className="item">{name}</li>;
}

export default Condition;
