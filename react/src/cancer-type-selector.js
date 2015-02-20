/** @jsx React.DOM */

var BASE_URL = 'http://preview.macmillan.org.uk/';

// Top-level component
var CancerTypeSelector = React.createClass({
    render: function() {
        var rows = [];
        this.props.cancerTypes.forEach(function(cancer) {
            rows.push(<CancerItem cancer={cancer} key={cancer.id} />);
        });

        return (
            <div className="cancer-type-selector">
                <CancerTypeSearchBar />
                <ul className="cancer-type-list">
                    {rows}
                </ul>
            </div>
        );
    }
});

// Second-level component
var CancerTypeSearchBar = React.createClass({
    render: function() {
        return (
            <div className="cancer-type-search-bar">
                <input type="text" />
            </div>
        );
    }
});

var CancerItem = React.createClass({
    render: function() {
        var rows = [];
        this.props.cancer.subtypes.forEach(function(cancer) {
            rows.push(<CancerItem cancer={cancer} key={cancer.id} />);
        });

        return (
            <li className="cancer-item">
                <span className="item-name">
                    <a href={BASE_URL + this.props.cancer.slug}>
                        {this.props.cancer.name}
                    </a>
                </span>
                {rows.length ?
                    <ul className="cancer-subtypes">
                        {rows}
                    </ul>
                : null}
            </li>
        );
    }
});

React.render(
    <CancerTypeSelector cancerTypes={cancerTypes.cancerTypes} />,
    document.getElementById('react-cancer-type-selector')
);
