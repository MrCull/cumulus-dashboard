import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCollection,
  updateCollection,
  clearUpdateCollection,
} from '../../actions';
import { getCollectionId } from '../../utils/format';
import EditRaw from '../EditRaw/edit-raw';

const SCHEMA_KEY = 'collection';

const EditCollection = ({ match, collections }) => {
  const {
    params: { name, version },
  } = match;
  const collectionId = getCollectionId({ name, version });

  return (
    <div className = "edit_collections">
      <Helmet>
        <title> Edit Collection </title>
      </Helmet>
      <EditRaw
        pk={collectionId}
        schemaKey={SCHEMA_KEY}
        primaryProperty="name"
        state={collections}
        getRecord={() => getCollection(name, version)}
        updateRecord={(payload) => updateCollection(payload, name, version)}
        backRoute={`/collections/collection/${name}/${version}`}
        clearRecordUpdate={clearUpdateCollection}
        hasModal={true}
      />
    </div>
  );
};

EditCollection.propTypes = {
  match: PropTypes.object,
  collections: PropTypes.object,
};

export default withRouter(
  connect((state) => ({
    collections: state.collections,
  }))(EditCollection)
);
