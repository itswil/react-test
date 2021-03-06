/** @jsx React.DOM */

var BASE_URL = 'http://www.macmillan.org.uk/';

// Top-level component
var CancerTypeSelector = React.createClass({
    getInitialState: function(){
        return {
            filterText: ''
        }
    },
    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        return (
            <div className="cancer-type-selector">
                <CancerTypeSearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
                <CancerTypeList cancerTypes={this.props.cancerTypes} filterText={this.state.filterText} />
            </div>
        );
    }
});

// Second-level component
var CancerTypeSearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.cancerTypeSearchBar.getDOMNode().value
        );
    },
    render: function() {
        return (
            <div className="cancer-type-search-bar">
                <input type="text" placeholder="Search for a cancer type"
                    value={this.props.filterText}
                    onChange={this.handleChange}
                    ref="cancerTypeSearchBar"
                />
            </div>
        );
    }
});

// Second-level component
var CancerTypeList = React.createClass({
    render: function() {
        var rows = [];
        var filterText = this.props.filterText;

        this.props.cancerTypes.forEach(function(cancer) {
            if (cancer.name.toLowerCase().indexOf(filterText) != -1) {
                rows.push(<CancerItem cancer={cancer} key={cancer.id} />);
            }

            cancer.subtypes.forEach(function(subtype) {
                if (subtype.name.toLowerCase().indexOf(filterText) != -1) {
                    rows.push(<CancerItem cancer={subtype} key={subtype.id} />);
                }
            });
        });

        return (
            <ul className="cancer-type-list">
                {rows}
            </ul>
        );
    }
});

// Third-level component
var CancerItem = React.createClass({
    render: function() {
        return (
            <li className="cancer-item">
                <span className="item-name">
                    <a href={BASE_URL + this.props.cancer.slug}>
                        {this.props.cancer.name}
                    </a>
                </span>
            </li>
        );
    }
});

React.render(
    <CancerTypeSelector cancerTypes={cancerTypesObject.cancerTypes} />,
    document.getElementById('react-cancer-type-selector')
);
