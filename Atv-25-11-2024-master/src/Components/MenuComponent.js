import DishDetail from './DishDetailComponent';

function MenuComponent() {
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <div>
            {/* Passa o prato selecionado */}
            <DishDetail dish={selectedDish} />
        </div>
    );
}
