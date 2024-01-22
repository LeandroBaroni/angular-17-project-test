import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-formarray-nested',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formarray-nested.component.html',
  styleUrl: './formarray-nested.component.scss'
})
export class FormarrayNestedComponent implements OnInit {
  private builder = inject(FormBuilder);
  private subscriptions: Subscription[] = [];

  form = this.builder.group({
    baseInit: [0],
    baseDuration: [0],
    budgetInit: [0],
    budgetDuration: [0]
  });

  formCustom: FormGroup;
  isLoading = false;

  ngOnInit(): void {
    this.subscriptions.push(
      this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
        this.createCustomForm();
      })
    );
  }

  get subItems() {
    return this.formCustom.controls['subItems'] as FormArray;
  }

  private createCustomForm() {
    this.isLoading = true;
    let arrayMerged: number[] = [];
    this.formCustom = this.builder.group({
      subItems: this.builder.array([])
    });
    const { baseInit, baseDuration, budgetInit, budgetDuration } = this.form.value;

    if (budgetInit && budgetDuration) {
      for (let i = 0; i < budgetDuration; i++) {
        arrayMerged.push(budgetInit + i);
      }
    }
    if (baseInit && baseDuration) {
      for (let i = 0; i < baseDuration; i++) {
        arrayMerged.push(baseInit + i);
      }
    }

    arrayMerged = [...new Set(arrayMerged)];

    arrayMerged.forEach(element => {
      let subItem = new FormGroup({});
      if (
        element >= baseInit &&
        element <= baseInit + baseDuration - 1 &&
        element >= budgetInit &&
        element <= budgetInit + budgetDuration - 1
      ) {
        const control = new FormControl(0);
        subItem.addControl('title', control);
        subItem.addControl('stand', control);
      } else if (
        element >= baseInit &&
        element <= baseInit + baseDuration - 1 &&
        !(element >= budgetInit && element <= budgetInit + budgetDuration - 1)
      ) {
        const control = new FormControl(0);
        subItem.addControl('title', control);
      } else if (
        !(element >= baseInit && element <= baseInit + baseDuration - 1) &&
        element >= budgetInit &&
        element <= budgetInit + budgetDuration - 1
      ) {
        const control = new FormControl(0);
        subItem.addControl('stand', control);
      } else {
        console.log('element: ', element);
      }
      this.subItems.push(subItem);
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
