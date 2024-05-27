import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

// import moment from 'moment';

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data)
            return res.data 

            
        }
    })

    return (
        <div>
            <SectionTitle heading="Payments"></SectionTitle>
                <div>
                    <h1 className="text-3xl">Total payments: {payments.length}</h1>
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Category</th>
        <th>Total Price</th>
        <th>Status</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item, idx) => <tr key ={item._id}>
            <th>{idx + 1}</th>
            <td>{item.transactionId}</td>
            <td>${item.price}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
                </div>
        </div>
    );
};

export default PaymentHistory;