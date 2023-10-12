import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { boardDataType } from "./Board.types";
import { useState } from "react";
import { BoardTitle } from "./Board.style";

export default function Board() {
  const [loading, setLoading] = useState(false);

  const columns: ColumnsType<boardDataType> = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      width: "60px",
      render: () => <>1</>,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render: (title, data) => (
        <BoardTitle>
          {title}
          {data.tags ? (
            <Tag color={"red"} key={String(data.tags)}>
              {String(data.tags).toUpperCase()}
            </Tag>
          ) : (
            <></>
          )}
        </BoardTitle>
      ),
    },
    {
      title: "날짜",
      dataIndex: "date",
      key: "date",
      width: "150px",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tag) => (
        <Tag color={"red"} key={tag}>
          {String(tag).toUpperCase()}
        </Tag>
      ),
    },
  ];
  const data: boardDataType[] = [
    {
      key: "1",
      tags: ["new"],
      title: "첫번째 글 제목입니둥",
      date: "2023-10-12",
    },
    {
      key: "2",
      tags: [],
      title: "두번째 글 제목입니둥",
      date: "2023-10-10",
    },
    {
      key: "3",
      tags: [],
      title: "세번째 글 제목입니둥",
      date: "2023-10-09",
    },
  ];

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
      onRow={(record, index) => {
        return {
          onClick: (event) => {
            console.log(record);
            console.log(index);
          },
        };
      }}
    />
  );
}
