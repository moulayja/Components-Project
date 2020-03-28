import React from 'react';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  
  return (
    <div className="ui container comments">
    <h1>Components</h1>
    <ApprovalCard>
    <CommentDetail
     name="Bijjouno"
     comment="Bijou orta jou im9our"
     image={faker.image.avatar()}>Bijou arssoul issomoum
    </CommentDetail>
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail name="Jamalino" comment="jamal is awesome" image={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail name="Hichamino" comment="Hicham is awesome" image={faker.image.avatar()}/>
    </ApprovalCard>

    
    <ApprovalCard>
      <CommentDetail name="Brahimino" comment="Brahim is Cool" image={faker.image.avatar()}/>
    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail name="Mohmadin" comment="Med is Medina" image={faker.image.avatar()}/>
    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail name="Mbarkino" comment="Mbarek is Rich" image={faker.image.avatar()}/>
    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail name="Caitlino" comment="Cait is lovely" image={faker.image.avatar()}/>
    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail name="Fatimano" comment="Fatima is fantastic" image={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail name="Kokochino" comment="Kokochino i3zan imomim" image={faker.image.avatar()}>Imzzi soul lkhirad</CommentDetail>
    </ApprovalCard>

    </div>
  );
}

export default App;
