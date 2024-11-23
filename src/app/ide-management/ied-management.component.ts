import {ChangeDetectionStrategy, Component} from '@angular/core';


@Component({
  selector: 'app-ide-management',
  templateUrl: './ied-management.component.html',
  styleUrl: './ied-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IedManagementComponent {
  childrenAccessor = (node: any) => node.children ?? [];
  dataSource: any =[
    {
      name: 'Fruit',
      children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
        },
      ],
    },
  ];

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  constructor() {

  }

  ngOnInit() {}

  public contextRightClickEvent = (dataInput: any) => {
    debugger;
    return false;
  }

  public dropEvent = (dataInput: any) => {

  }

}
