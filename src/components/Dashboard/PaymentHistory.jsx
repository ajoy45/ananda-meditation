import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/confirm')
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>TransitionId</th>
                        <th>Email</th>
                        <th>Date</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map((item, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{item.transactionId}</td>
                            <td>{item.email}</td>
                            <td>{item.data}</td>


                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;