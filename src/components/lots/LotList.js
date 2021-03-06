import React from "react";
import Lot from "./Lot";
import lots from "../../mock/lot-content";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import { FaTrashAlt } from "react-icons/fa";

const TrashIcon = styled(FaTrashAlt)`
  font-size: 25px;
  color: #fff;
`;
const LotsListStyle = styled.div`
  display: flex;
  main {
    margin-left: 15px;
    background-color: #ebf3ff;
    padding: 20px;
  }
  section {
    background-color: #ebf3ff;
    padding: 10px;
    margin-left: 20px;
  }
  .search {
    width: 100%;
    padding: 10px;
  }
  .search-form {
    display: flex;
    justify-content: space-between;
    input,
    select {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.24);
      padding: 10px;
      margin: 10px 5px;
    }
    .search-form-buttons {
      display: flex;
      justify-content: space-between;
      margin: 10px 5px;

      button:first-child {
        width: 230px;
        height: 40px;
        color: #fff;
        background-color: #023581;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s ease-in;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        margin-right: 20px;
        &:hover {
          background-color: rgba(3, 58, 141, 0.8);
        }
      }
      button:last-child {
        width: 50px;
        height: 40px;
        color: #fff;
        background-color: #023581;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s ease-in;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        &:hover {
          background-color: rgba(3, 58, 141, 0.8);
        }
      }
    }
  }
  .pagination {
    justify-content: center;
    padding: 30px;
  }
  .pagination button {
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 20px;
  }
  .pagination button {
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 20px;
    color: #023581;
  }
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: #023581;
    color: #fff;
  }
  .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 1600px) {
    flex-direction: column;
    main {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1320px) {
    .search-form {
      flex-wrap: wrap;
      justify-content: center;
    }
    .lots-list {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 1024px) {
    .lots-list {
      justify-content: center;
    }
    main {
      margin-left: 0;
      padding: 20px;
    }
    section {
      margin-top: 10px;
      padding: 0;
      margin-left: 0;
    }
  }
  @media screen and (max-width:768px){
    .search-form {
    justify-content: center;
    input,
    select {
      width:350px;
  }
  .search-form-buttons {
      display: flex;
      margin: 10px 5px;

      button:first-child {
        width: 280px;
        height: 40px;
  }
}
`;

const LotList = () => {
  return (
    <LotsListStyle>
      <Sidebar />
      <section>
        <div className="search">
          <form className="search-form">
            <input type="name" placeholder="Lot raqamini kiriting" />
            <select placeholder="Tuman">
              <option>Tuman</option>
              <option>Samarqand</option>
            </select>
            <input type="date" />
            <div className="search-form-buttons">
              <button>Izlash</button>
              <button>
                <TrashIcon />
              </button>
            </div>
          </form>
        </div>
        <div className="lots-list">
          {lots.map((lots) => (
            <Lot
              key={lots.id}
              title={lots.title}
              image={lots.image}
              number={lots.number}
            />
          ))}
        </div>
      </section>
    </LotsListStyle>
  );
};

export default LotList;
