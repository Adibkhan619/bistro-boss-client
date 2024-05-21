import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
    // TANSTACK QUERY
    const axiosSecure = useAxiosSecure();
    const { data: cart = [] } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axiosSecure.get("/carts");
            return res.data;
        },
    });
    return [cart];
};

export default useCarts;
