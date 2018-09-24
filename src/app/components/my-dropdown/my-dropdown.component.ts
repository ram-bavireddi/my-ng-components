import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

const DEFAULT_WIDTH = '200px';
const DEFAULT_HEIGHT = '36px';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() model: any;
  @Input() options = [];
  @Input() disabled = false;
  @Input() width = DEFAULT_WIDTH;
  @Input() height = DEFAULT_HEIGHT;
  @Output() modelChange = new EventEmitter();

  optionsOpen = false;
  selectedOption;
  optionsFilter = '';
  private optionsInternal = [];

  constructor(private renderer: Renderer2) {
    document.addEventListener('click', (event) => {
      const clickedElementClass = event.target['classList'][0];
      if (clickedElementClass === 'selected-option' ||
        clickedElementClass === 'up' ||
        clickedElementClass === 'down' ||
        clickedElementClass === 'options' ||
        clickedElementClass === 'options-filter') {
        return;
      } else {
        if (!this.disabled && this.optionsOpen) {
          this.optionsOpen = false;
        }
      }
    });
  }

  ngOnInit() {
    this.selectedOption = this.model;
    this.optionsInternal = JSON.parse(JSON.stringify(this.options));
  }

  toggleOptions() {
    if (!this.disabled) {
      this.optionsOpen = !this.optionsOpen;
      if (this.optionsOpen) {
        setTimeout(() => {
          this.renderer.selectRootElement('#options-filter').focus();
        }, 1);
      }
    }
  }

  onOption(idx) {
    this.selectedOption = this.options[idx].label;
    this.toggleOptions();
    this.options = this.optionsInternal;
    this.modelChange.emit(this.selectedOption);
  }

  onOptionsFilter(value) {
    if (value) {
      const filteredOptions = this.optionsInternal.filter(option => {
        return option.label.toLowerCase().indexOf(value) >= 0;
      });
      this.options = filteredOptions;
    } else {
      this.options = this.optionsInternal;
    }
  }

  higlightedOptionClass(option) {
    return option.label === this.selectedOption ? 'highlighted-option' : '';
  }
}
