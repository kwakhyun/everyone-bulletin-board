import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MainButton } from "../MainButton";

const Search = ({ searchPost }) => {
  const [search, setSearch] = useState({ select: "", input: "" });

  const selectRef = useRef();
  const inputRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setSearch({
      select: selectRef.current.value,
      input: inputRef.current.value,
    });
    console.log("search?? ", search);
  };

  const onSearch = () => {
    searchPost(search);
  };

  return (
    <SearchContainer>
      <SearchSelect ref={selectRef} name="select" onChange={onChange}>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="nickname">작성자</option>
      </SearchSelect>
      <SearchInput
        type="text"
        name="input"
        ref={inputRef}
        onChange={onChange}
      />
      <MainButton onClick={onSearch} children="검색" />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 0.5em;
`;

const SearchSelect = styled.select`
  flex: 1 1 10%;
  margin-right: 1em;
`;

const SearchInput = styled.input`
  flex: 1 1 70%;
  margin-right: 1em;
`;

export default Search;