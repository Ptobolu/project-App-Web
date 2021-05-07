import React from 'react';

import Layout from '../../components/Layout';
import Card from '../../components/Layout/UI/Card';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {
  return(
      <div>
          <Layout>
            <div> 
              <Card>
                <form>
                  Login
                </form>
              </Card>
            </div>
            </Layout>   
      </div>
   
   )

 }

export default LoginPage