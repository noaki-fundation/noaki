function Tooltip() {
    return (
        <div>
            <h1>Tooltip</h1>
        </div>
    )   
}

export default function handleMouse(evt: React.MouseEvent<HTMLDivElement>) {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'block';
    }

    return <Tooltip />;
}