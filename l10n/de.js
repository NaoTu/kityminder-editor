define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mind Map',
            'tianpan': 'Tianpan Karte',
            'structure': 'Organigramm',
            'filetree': 'Verzeichnis-Organigramm',
            'right': 'Logisches Strukturdiagramm',
            'fish-bone': 'Fischknochenfigur'
        },
        'theme': {
            'classic': 'Classic',
            'classic-compact': 'Classic Kompakt',
            'snow': 'sanfte Licht',
            'snow-compact': 'Kompakt kalt',
            'fish': 'Fischknochen',
            'wire': 'Drahtgitter',
            'fresh-red': 'Frisches Rot',
            'fresh-soil': 'Boden gelb',
            'fresh-green': 'Literarisches Grün',
            'fresh-blue': 'Himmelblau',
            'fresh-purple': 'Romantisches Lila',
            'fresh-pink': 'Gehirnpulver',
            'fresh-red-compat': 'Kompakt rot',
            'fresh-soil-compat': 'Kompakt gelb',
            'fresh-green-compat': 'Kompaktgrün',
            'fresh-blue-compat': 'Kompakt blau',
            'fresh-purple-compat': 'Kompaktes Lila',
            'fresh-pink-compat': 'Kompaktes Pulver',
            'tianpan': 'Zifferblatt',
            'tianpan-compact': 'Kompakter Tag'
        },
        'maintopic': 'Zentrierthema',
        'topic': 'Branchenthema',
        'panels': {
            'history': 'Verlauf',
            'template': 'Vorlage',
            'theme': 'Haut',
            'layout': 'Layout',
            'style': 'Stil',
            'font': 'Text',
            'color': 'Farbe',
            'background': 'Hintergrund',
            'insert': 'Einfügen',
            'arrange': 'Anpassung',
            'nodeop': 'aktuell',
            'priority': 'Priorität',
            'progress': 'Fortschritt',
            'resource': 'Ressourcen',
            'note': 'Bemerkungen',
            'attachment': 'Anlage',
            'word': 'Text'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Neuer Geschwisterknoten',
                'appendparentnode': 'Neuen Überknoten unterhalb',
                'appendchildnode': 'Neuer Unterknoten',
                'removenode': 'Löschen',
                'editnode': 'Bearbeiten',
                'arrangeup': 'Hoch',
                'arrangedown': 'Runter',
                'resetlayout': 'Layout organisieren',
                'expandtoleaf': 'Alle Knoten ausklappen',
                'expandtolevel1': 'Ausklappen bis auf Level 1 Knoten',
                'expandtolevel2': 'Ausklappen bis zu sekundären Knoten',
                'expandtolevel3': 'Ausklappen bis zu Knoten der dritten Ebene',
                'expandtolevel4': 'Ausklappen bis zu vierstufigen Knoten',
                'expandtolevel5': 'Ausklappen bis zu fünfstufigen Knoten',
                'expandtolevel6': 'Ausklappen bis zu sechsstufigen Knoten',
                'fullscreen': 'Vollbild',
                'outline': 'Gliederung'
            },
            'search':'suchen',
            'expandtoleaf': 'Erweitern',
            'back': 'Zurück',
            'undo': 'Rückgängig (Strg + Z)',
            'redo': 'Wiederholen (Strg + Y)',
            'tabs': {
                'idea': 'Idee',
                'appearence': 'Aussehen',
                'view': 'Ansicht'
            },
            'bold': 'Fett',
            'italic': 'Kursiv',
            'forecolor': 'Schriftfarbe',
            'fontfamily': 'Schriftart',
            'fontsize': 'Schriftgröße',
            'layoutstyle': 'Thema',
            'node': 'Knotenoperation',
            'hand': 'Ziehen erlauben',
            'camera': 'Stammknoten zentrieren',
            'zoom-in': 'Vergrößern (Strg +)',
            'zoom-out': 'Verkleinern (Strg)',
            'markers': 'Markierungen',
            'help': 'Hilfe',
            'preference': 'Einstellungen',
            'expandnode': 'Auf das Blatt erweitern',
            'collapsenode': 'einen Level-1-Knoten erhalten',
            'template': 'Vorlage',
            'theme': 'Haut',
            'clearstyle': 'Stil entfernen',
            'copystyle': 'Stil kopieren',
            'pastestyle': 'Stil einfügen',
            'appendsiblingnode': 'Gleiches Thema',
            'appendchildnode': 'Untergeordnetes Thema',
            'arrangeup': 'Voreinstellung',
            'arrangedown': 'Nachstimmen',
            'editnode': 'Bearbeiten',
            'removenode': 'Entfernen',
            'priority': 'Priorität',
            'progress': {
                'p1': 'Nicht begonnen',
                'p2': '1/8 fertiggestellt',
                'p3': '1/4 fertiggestellt',
                'p4': '3/8 fertiggestellt',
                'p5': '1/2 fertiggestellt',
                'p6': '5/8 fertiggestellt',
                'p7': '3/4 fertiggestellt',
                'p8': '7/8 fertiggestellt',
                'p9': 'Abgeschlossen',
                'p0': 'Klarer Fortschritt'
            },
            'resource': {
                'add': 'hinzufügen'
            },
            'link': 'Link',
            'image': 'Bild',
            'note': 'Notiz',
            'insertlink': 'Link einfügen',
            'insertimage': 'Bild einfügen',
            'insertnote': 'Notiz einfügen',
            'removelink': 'Bestehende Links entfernen',
            'removeimage': 'Bestehendes Bild entfernen',
            'removenote': 'Bestehende Notizen entfernen',
            'resetlayout': 'Organisieren',
            'navigator': 'Navigator',
            'selectall': 'Alles auswählen',
            'selectrevert': 'Auswahl umkehren',
            'selectsiblings': 'Geschwisterknoten auswählen',
            'selectlevel': 'Alle Knoten derselben Eben',
            'selectpath': 'Pfad auswählen',
            'selecttree': 'Teilbaum auswählen',
            'noteeditor': {
                'title': 'Note',
                'hint': 'Support GFM grammar',
                'placeholder': 'Please select a node to edit note',
                'preview': 'Toggle preview'
            },
            'dialog': {
                'image': {
                    'title': 'Image',
                    'imagesearch': 'Image search',
                    'keyword': 'Keyword：',
                    'placeholder': 'Please input the keyword for search',
                    'baidu': 'Search',
                    'linkimage': 'Linked Image',
                    'linkurl': 'URL：',
                    'placeholder2': 'Must：start with http(s)://',
                    'imagehint': 'Hint：',
                    'placeholder3': 'Optional：The text that the mouse prompts when hovering over the image',
                    'preview': 'Image preview：',
                    'uploadimage': 'Upload Image',
                    'selectfile': 'Select file...',
                    'ok': 'OK',
                    'cancel': 'Cancel',
                    'pasteimage': 'Paste here and use the picture of the clipboard.',
                    'formatinfo': 'file ext must be jpg、gif or png'
                },
                'hyperlink': {
                    'title': 'Link',
                    'linkurl': 'Link url：',
                    'linkhint': 'Hint：',
                    'placeholder': 'Require：start with http(s):// or ftp://',
                    'placeholder2': 'OPtional: The text that the mouse prompts when hovering over the link',
                    'ok': 'OK',
                    'cancel': 'Cancel'

                },
                'exportnode': {
                    'title': 'Export Node',
                    'ok': 'OK',
                    'cancel': 'Cancel'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Main Topic'
            },
            'node': {
                'arrangeup': 'Arrange Up',
                'appendchildnode': 'Append Child Node',
                'appendsiblingnode': 'Append Sibling Node',
                'arrangedown': 'Arrange Down',
                'removenode': 'Delete',
                'appendparentnode': 'Append Parent Node',
                'selectall': 'Select All',
                'topic': 'Topic',
                'importnode': 'Import Node',
                'exportnode': 'Export Node'
            },
            'input': {
                'edit': 'Edit'
            },
            'priority': {
                'main': 'Priority',
                'remove': 'Delete',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Progress',
                'remove': 'Delete',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Undo',
                'redo': 'Redo'
            }
        }
    };
});