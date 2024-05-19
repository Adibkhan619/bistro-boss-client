import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => setMenu(data))
        console.log(menu);
    }, [])
    return [menu];
}

export default useMenu;