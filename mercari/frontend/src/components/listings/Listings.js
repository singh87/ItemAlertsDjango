import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getListings } from '../../actions/listings'
import { Card, Row, Col, Button, Collapse, Pagination } from "antd"

const mapStateToProps = state => ({
  listings: state.listings.listings
})

export class Listings extends Component {
  static PropTypes = {
    listings: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getListings();
    this.timer = setInterval(()=>this.props.getListings(), 100000)
    this.state = {
      list: [],
    };
  }
  
  render() {
    this.props.listings.reverse()
    return (
      <Fragment>
        {
          this.props.listings.map(listing => (
            <Card>
              <Row>
                <Col span={4} order={1}>
                  <img src={listing.image_url} alt="listing photo" width="150" height="150"></img>
                </Col>
                <Col span={12}order={2}>
                  <h6 ><a href={"https://www.mercari.com/us/item/" + listing.item_id}>{listing.title}</a></h6>
                  <p>{listing.description}</p>
                </Col>
                <Col span={6} style={{paddingLeft:"40px"}}>
                  <p>{listing.created_time}</p>
                    <h3>${listing.price/100}</h3>
                  <Button block type="normal" href={listing.item_checkout_url}>Buy It Now</Button>
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
