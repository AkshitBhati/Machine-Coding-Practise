import { useEffect, useState } from "react";
import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

export const SearchBar = () => {
    const [text, setText] = useState('')
    const [fetchedData, setfetchedData] = useState([])

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            const results = data.filter((user) => {
                return (
                value && 
                user && 
                user.name &&
                user.name.toLowerCase().includes(value)
                )
            })
            setfetchedData(results)
        })

       
    }

    const handleChange = (text) => {
        setText(text)
        fetchData(text)
    }

    // useEffect(() => {
    //     fetchData()
    // },[])

  return (
    <Container style={{marginTop:"20px"}}>
      <Stack style={{display:"flex", flexDirection:"column"}}>
        <InputGroup>
          <InputLeftElement>
            <IoSearchOutline />
          </InputLeftElement>
          <Input type="text" placeholder="Enter Text" onChange={(e) => handleChange(e.target.value)} value={text}/>
        </InputGroup>
        <div style={{backgroundColor:"#d1caca", padding:"10px"}}>
          {fetchedData.length > 0 ? (
          fetchedData.map((data) => (
            <div className="hover">
            <p key={data.id} >{data.name}</p>
            </div>
            ))) : (<></>)}
            </div>
      </Stack>
    </Container>
  );
};
