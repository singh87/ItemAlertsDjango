import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getListings } from '../../actions/listings'
import { Card, Row, Col } from "antd"

const mapStateToProps = state => ({
  listings: state.listings.listings
})

export class Listings extends Component {
  static PropTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getListings();
    this.state = {
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        {
          this.props.listings.map(listing => (
            <Card>
              <Row>
                <Col span={5} order={1}>
                  <img src={listing.image_url} alt="listing photo"></img>
                </Col>
                <Col span={10}order={2}>
                  <h6>{listing.title}</h6>
              
                  <p>{listing.description}</p>
                </Col>
              </Row>
              
            </Card>
          ) )
        }
        
      </Fragment>
      
    );
  }
}


export default connect(mapStateToProps, {getListings})(Listings);
