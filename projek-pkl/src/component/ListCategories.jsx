import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { API_URL } from '../utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ nama }) => {
  const iconMap = {
    "Makanan": faUtensils,
    "Minuman": faCoffee,
    "Cemilan": faCheese,
  };

  const icon = iconMap[nama] || faUtensils;

  return <FontAwesomeIcon icon={icon} className={`icons-${nama.toLowerCase()}`} />;
}

function ListCategories({ changeCategory, categoryYangDipilih }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "/categories")
      .then(res => {
        const categoriesData = res.data;
        setCategories(categoriesData);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <Col md={2} mt="2">
      <h4 className='fw-bold'>Daftar Kategori</h4>
      <hr />
      <ListGroup className='list'>
        {categories.length === 0 ? (
          <ListGroup.Item>Loading...</ListGroup.Item>
        ) : (
          categories.map(category => (
            <ListGroup.Item
              key={category.id}
              onClick={() => changeCategory(category.nama)}
              className={categoryYangDipilih === category.nama ? "category-aktif" : ""}
            >
              <h5>
                <Icon nama={category.nama} /> {category.nama}
              </h5>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Col>
  );
}

export default ListCategories;
