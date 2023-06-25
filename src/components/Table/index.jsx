import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

function Table({ children, ...props }) {
  return <table {...props}>{children}</table>;
}

function TableHead({ children, ...props }) {
  return <thead {...props}>{children}</thead>;
}

function TableBody({ children, ...props }) {
  return <tbody {...props}>{children}</tbody>;
}

function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}

function TableCell({ children, ...props }) {
  return <td {...props}>{children}</td>;
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Table, TableHead, TableBody, TableRow, TableCell };
