import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function DishDetail({ dish }) {
    if (dish == null) {
        return <div></div>;  // Se o prato for nulo, retorna uma div vazia.
    }

    return (
        <div className="row">
            {/* Pão com manteiga */}
            <div className="col-12 col-md-5 m-1">
                {/* Pão, uma faca e manteiga */}
            </div>
            
            {/* Exibe os comentários */}
            <div className="col-12 col-md-5 m-1">
                {/* Comentários do prato vão aqui */}
            </div>
        </div>
    );
}

return (
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            {renderDish(dish)}  {/* Detalhes dos pratos */}
        </div>
    </div>
);


export default DishDetail;

function renderDish(dish) {
    return (
        <Card>
            <CardImg top src={vadonut.png} alt={vadonut.png} />
            <CardBody>
                <CardTitle>{Donut}</CardTitle>
                <CardText>{Delicioso_Donut}</CardText>
            </CardBody>
        </Card>
    );
}
return (
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            {renderDish(dish)}  {/* Renderiza os detalhes do prato */}
        </div>
        <div className="col-12 col-md-5 m-1">
            {renderComments(dish.comments)}  {/* Renderiza os comentários */}
        </div>
    </div>
);


function renderComments(comments) {
    if (comments == null) {
        return <div></div>;  
    }

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
