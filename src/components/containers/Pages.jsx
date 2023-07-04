import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export const Pages = ({ totalPages, active, action, showPages }) => {
  const [view, setView] = useState([]);

  useEffect(() => {
    dinamycPages();
  }, [active,totalPages]);

  const dinamycPages = () => {
    if (totalPages < showPages) {
      const values = Array(totalPages)
        .fill()
        .map((_, i) => i + 1);
      setView(values);
      return;
    }

    if (active < showPages - 1) {
      const initialMinor3 = Array(showPages)
        .fill()
        .map((_, i) => i + 1);
      setView(initialMinor3);
    } else if (active >= totalPages - 2) {
      const finalMinor3 = Array(showPages)
        .fill()
        .map((_, i) => i + (totalPages - (showPages - 1)));
      setView(finalMinor3);
    } else {
      const major3 = Array(showPages)
        .fill()
        .map((_, i) => i + (active - Math.floor(showPages / 2)));
      setView(major3);
    }
  };

  const prev = () => {
    active == 1 ? null : action(active - 1);
  };

  const next = () => {
    active == totalPages ? null : action(active + 1);
  };

  const change = (page) => {
    active != page && action(page);
  };

  const first = () => {
    active != 1 && action(1);
  };

  const last = () => {
    active != totalPages && action(totalPages);
  };

  return (
    <Pagination className="fw-bold">
      {totalPages > 1 && <Pagination.First onClick={first} />}
      {totalPages > showPages && active >= showPages-1 && (
        <>
          <Pagination.Item onClick={first}>{1}</Pagination.Item>
          <Pagination.Ellipsis />
        </>
      )}
      {totalPages >= 2 && <Pagination.Prev onClick={prev} />}
      {view.map((item, idx) => (
        <Pagination.Item
          key={idx}
          active={item === active}
          onClick={() => change(item)}
        >
          {item}
        </Pagination.Item>
      ))}
      {totalPages >= 2 && <Pagination.Next onClick={next} />}
      {totalPages > showPages && active <= totalPages - 3 && (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={last}>{totalPages}</Pagination.Item>
        </>
      )}
      {totalPages > 1 && <Pagination.Last onClick={last} />}
    </Pagination>
  );
};
