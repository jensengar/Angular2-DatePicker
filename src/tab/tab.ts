import {Component, Attribute, Input} from 'angular2/core';
import {NgClass, CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'tab',
	inputs: ['name,icon,action','color'],
	templateUrl: 'src/tab/tab.html',
	styleUrls: ['src/tab/tab.css'],
	directives: [NgClass, CORE_DIRECTIVES]
})

export class Tab{
	@Input() name:any;
	color:any;
	action: any;
	icon: any;
	constructor(@Attribute ('name') name:String, @Attribute ('icon') icon:String, @Attribute ('action') action:String, @Attribute ('color') color:String)
	{
		this.name= name;
		this.icon= icon;
		this.action= action;
		this.color= color;
	}
}

