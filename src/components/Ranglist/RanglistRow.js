const RanglistRow = ({ ranglistRow, index }) => {

    const firstName = ranglistRow.firstName;
    const lastName = ranglistRow.lastName;
    const points = ranglistRow.points;

    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{points}</td>
            </tr>
        </>
    )
}

export default RanglistRow;