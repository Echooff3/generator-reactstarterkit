/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './<%= comp %>.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class <%= comp %> {

  render() {
    return (
      <div className="<%= comp %>">
      </div>
    );
  }

}

export default <%= comp %>;

