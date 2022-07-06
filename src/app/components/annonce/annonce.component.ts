import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  imagePreview:string
  annonceForm: FormGroup
  annonce:any={}

  private isuserAuth 
  constructor(private userService:UserService , private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.isuserAuth=this.userService.isUserAuth()
    this.annonceForm=this.formBuilder.group({
      title:[""],
      adresse:[""],
      ville:[""],
      description:[""],
      categorie:[""],
      prix:[""],
      
      image:[""]
    })
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.annonceForm.patchValue({ img: file });
    this.annonceForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    addAnnonce(){
      console.log('annonce',this.annonce)
    }


}
